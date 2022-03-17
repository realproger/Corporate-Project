import email
from tabnanny import verbose
from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Home(models.Model):
    title = models.CharField(
        verbose_name="Название сайта", max_length=100)
    description = models.TextField(
        verbose_name="Описание", null=True
        )
    logo = models.ImageField(upload_to = "logo/", blank = True, null = True)
    phone = models.CharField(verbose_name="Телефон", max_length=15)
    time_work = models.CharField(
        verbose_name="Время работы", max_length=20, help_text="9:00 PM - 12:00 AM")
    email = models.CharField(verbose_name="E-mail", max_length=35)
    # social
    facebook = models.CharField(
        max_length=150, help_text='https://www.facebook.com/friends/suggestions/?profile_id=100024268353113')
    instagram = models.CharField(
        max_length=150, help_text='https://www.instagram.com/edzn_bey/')
    youtube = models.CharField(
        max_length=150, blank=True, help_text='https://www.youtube.com/c/selfedu_rus')
    whatsapp = models.CharField(
        max_length=150, help_text='+996771494083')
    telegram = models.CharField(
        max_length=150, blank=True, null=True, help_text='https://t.me/edzn21')
    
    class Meta:
        verbose_name_plural = "Главная"
        verbose_name = "главный"

    def __str__(self):
        return self.title


class Service(models.Model):
    title = models.CharField(verbose_name="Название", max_length=100)
    image = models.ImageField(verbose_name="Фото",  upload_to="service/")
    description = models.TextField(verbose_name="Описание") 

    class Meta:
        verbose_name_plural = "Услуги"
        verbose_name = "услуга"

    def __str__(self):
        return self.title


class Partners(models.Model):
    title = models.CharField(verbose_name="Название", max_length=100)
    link_partner = models.CharField(
        verbose_name="Ссылка на партнера", max_length=250, blank=True, null=True)
    image = models.ImageField(verbose_name="Фото",  upload_to="parners/")

    class Meta:
        verbose_name_plural = "Партнёры"
        verbose_name = "партнёра"

    def __str__(self):
        return self.title



class Price(models.Model):
    title_tarif = models.CharField(verbose_name="Название", max_length=100)
    price_tarif = models.CharField(
        verbose_name="цена", max_length=250, 
        help_text="$45 / Месяц или $Бесплатно / Месяц", null=True
    )
    description = RichTextField(verbose_name="Описание", null=True)

    class Meta:
        verbose_name_plural = "Цена"
        verbose_name = "цена"

    def __str__(self):
        return self.title_tarif

class Team(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to = "team/")
    position = models.CharField(max_length=50)
    facebook = models.CharField(max_length=255)
    twitter = models.CharField(max_length=255)
    linkedin = models.CharField(max_length=255)
    instagram = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Команда"
        verbose_name_plural = "Команды"

class FAQ(models.Model):
    question = models.CharField(max_length=200)
    answer = models.TextField()

    def __str__(self):
        return self.question

    class Meta:
        verbose_name = "Вопрос"
        verbose_name_plural = "Вопросы"

class AboutCysec(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "О Cysec"
        verbose_name_plural = "О Cysec"

class AboutService(models.Model):
    icon = models.ImageField(upload_to = "icons/")
    title = models.CharField(max_length = 250)
    description = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "О услуге"
        verbose_name_plural = "О услугах"
    
class Benefits(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField()

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "Преимущество"
        verbose_name_plural = "Преимущества"

class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Контакт"
        verbose_name_plural = "Контакты"