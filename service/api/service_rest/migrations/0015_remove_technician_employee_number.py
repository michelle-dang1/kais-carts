# Generated by Django 4.0.3 on 2022-12-09 16:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0014_appointment_is_finished'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='technician',
            name='employee_number',
        ),
    ]