# Generated by Django 4.0.3 on 2022-12-06 22:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_alter_appointment_appointment_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='automobilevo',
            old_name='import_href',
            new_name='import_id',
        ),
    ]