# Generated by Django 4.0.3 on 2022-12-07 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0009_appointment_appointment_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='appointment_time',
        ),
        migrations.AlterField(
            model_name='appointment',
            name='appointment_date',
            field=models.DateTimeField(),
        ),
    ]
