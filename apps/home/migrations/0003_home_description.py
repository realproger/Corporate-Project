# Generated by Django 3.2.7 on 2022-02-26 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20220226_1115'),
    ]

    operations = [
        migrations.AddField(
            model_name='home',
            name='description',
            field=models.TextField(default=1, verbose_name='Описание'),
            preserve_default=False,
        ),
    ]
