from django import forms
from django.shortcuts import redirect, render
from apps.home.models import (
    Home, Service, Price, 
    Partners, Team, FAQ,
    AboutCysec, AboutService, Benefits, 
    Contact
)
from apps.home.forms import ContactForm
# Create your views here.
def index(request):
    home = Home.objects.latest('id')
    service = Service.objects.all().order_by('-id')[:3]
    service_count = Service.objects.all()
    price = Price.objects.all().order_by('-id')[:3]
    partners = Partners.objects.all().order_by('-id')
    teams = Team.objects.all().order_by('-id')
    faq = FAQ.objects.all().order_by('-id')
    abouts = AboutCysec.objects.all().order_by('id')[:6]
    aboutservices = AboutService.objects.all().order_by('-id')[:6]
    benefits = Benefits.objects.all()[:6]
    contact = Contact.objects.all()
    context = {
        'homes' : home,
        'prices' : price,
        'services' : service,
        'partners' : partners,
        'teams' : teams,
        'faqs' : faq,
        'abouts' : abouts, 
        'aboutservices' : aboutservices, 
        'benefits' : benefits, 
        'contacts' : contact, 
}
    return render(request, 'index.html', context)

def service_page(request):
    home = Home.objects.latest('id')
    context = {
        "homes":home,
    }
    return render (request, 'services.html', context)

def contact_us(request):
    form = ContactForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            contact = form.save()
            
            return redirect('thank_you')

 
    return render(request, "contact-us.html", locals()) 

def thank_you(request):
    return render (request, 'thank_you.html')

def support(request):
    contact = Contact.objects.all()
    home = Home.objects.latest('id')
    context = {
        "contacts" : contact, 
        "homes" : home,
    }

    return render (request, 'support.html', context)

def about_us(request):
    home = Home.objects.latest('id')
    partners = Partners.objects.all().order_by('-id')
    teams = Team.objects.all().order_by('-id')
    context = {
        'homes': home,
        'partners' : partners,
        'teams' : teams,
    }

    return render(request, 'about-us.html', context)

def service_detail(request, id):
    service = Service.objects.get(id = id)
    context = {
        'service' : service
    }
    return render(request, 'service-details.html', context)