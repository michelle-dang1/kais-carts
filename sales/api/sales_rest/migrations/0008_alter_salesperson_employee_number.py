# Generated by Django 4.0.3 on 2022-12-12 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0007_rename_sales_person_salesperson_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesperson',
            name='employee_number',
            field=models.PositiveSmallIntegerField(unique=True),
        ),
    ]
