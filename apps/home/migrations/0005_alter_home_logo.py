# Generated by Django 3.2.7 on 2022-02-26 12:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_home_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='home',
            name='logo',
            field=models.ImageField(blank=True, null=True, upload_to='logo/'),
        ),
    ]