import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent {
  @Input() control: AbstractControl | null = null;

  get errorMessage(): string | null {
    if (this.control && this.control.errors) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }
    return null;
  }

  private getValidatorErrorMessage(validatorName: string, validatorValue?: any): string {
    const config: { [key: string]: string } = {
      'required': 'Ce champ est requis',
      'minlength': `Ce champ doit contenir au moins ${validatorValue.requiredLength} caractères`,
      'maxlength': `Ce champ ne peut pas contenir plus de ${validatorValue.requiredLength} caractères`,
      'pattern': 'Format incorrect',
      'email': 'Email invalide',
      'min': `La valeur doit être supérieure ou égale à ${validatorValue.min}`,
      'max': `La valeur doit être inférieure ou égale à ${validatorValue.max}`
    };

    return config[validatorName] || 'Erreur de validation inconnue';
  }
}


