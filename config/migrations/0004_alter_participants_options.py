# Generated by Django 5.1.7 on 2025-05-15 12:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('config', '0003_participants'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='participants',
            options={'verbose_name': 'Участник проекта', 'verbose_name_plural': 'Участники проекта'},
        ),
    ]
