# Generated by Django 4.0.3 on 2022-12-08 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0013_alter_appointment_appointment_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='is_finished',
            field=models.BooleanField(default=False),
        ),
    ]