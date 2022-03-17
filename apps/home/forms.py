from django import forms
from apps.home.models import Contact    

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields =['name', 
        'phone', 
        'email', 
        'subject', 
        'message'
        ]