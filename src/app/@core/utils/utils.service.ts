import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Injectable({
    providedIn: 'root',
})
export class UtilsService {

    constructor() {
    }

    getSafeUrl(value: string) {
        return value ? value.toString()
            .normalize('NFD')
            .toLowerCase()
            .replace(/ç/g, 'c')
            .replace(/ğ/g, 'g')
            .replace(/ı/g, 'i')
            .replace(/ö/g, 'o')
            .replace(/ş/g, 's')
            .replace(/ü/g, 'u')
            .replace(/&/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '')
            .replace(/-+/g, '-')
            .replace(/^-*/, '')
            .replace(/-*$/, '') : '';
    }
    amexCardnumber(inputtxt) {
        const cardno = /^(?:3[47][0-9]{13})$/;
        return cardno.test(inputtxt);
    }
    visaCardnumber(inputtxt) {
        const cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        return cardno.test(inputtxt);
    }
    masterCardnumber(inputtxt) {
        const cardno = /^(?:5[1-5][0-9]{14})$/;
        return cardno.test(inputtxt);
    }
    discoverCardnumber(inputtxt) {
        const cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
        return cardno.test(inputtxt);
    }
    dinerClubCardnumber(inputtxt) {
        const cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
        return cardno.test(inputtxt);
    }
    jCBCardnumber(inputtxt) {
        const cardno = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
        return cardno.test(inputtxt);
    }

    isValidCreditCardNumber(cardNumber) {
        let cardType = null;
        if (this.visaCardnumber(cardNumber)) {
            cardType = 'visa';
        } else if (this.masterCardnumber(cardNumber)) {
            cardType = 'mastercard';
        } else if (this.amexCardnumber(cardNumber)) {
            cardType = 'americanexpress';
        } else if (this.discoverCardnumber(cardNumber)) {
            cardType = 'discover';
        } else if (this.dinerClubCardnumber(cardNumber)) {
            cardType = 'dinerclub';
        } else if (this.jCBCardnumber(cardNumber)) {
            cardType = 'jcb';
        }
        return cardType;
    }
    ValidateCreditCardNumber(control: AbstractControl) {
        if (!this.isValidCreditCardNumber(control.value)) {
            return { validCreditCardNumber: true };
        }
        return null;
    }
}
export function getSafeUrl(value: string) {
    return value ? value.toString()
        .normalize('NFD')
        .toLowerCase()
        .replace(/ç/g, 'c')
        .replace(/ğ/g, 'g')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ş/g, 's')
        .replace(/ü/g, 'u')
        .replace(/&/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-*/, '')
        .replace(/-*$/, '') : '';
}
export function camelToTitle(camelCase) {
    return camelCase
        .replace(/([A-Z])/g, (match) => ` ${match}`)
        .replace(/^./, (match) => match.toUpperCase())
        .trim()
}
@Injectable({
    providedIn: 'root'
})
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
    readonly DT_FORMAT = 'DD.MM.YYYY';

    parse(value: string): NgbDateStruct {
        if (value) {
            value = value.trim();
            let mdt = moment(value, this.DT_FORMAT);
        }
        return null;
    }
    format(date: NgbDateStruct): string {
        if (!date) return '';
        let mdt = moment([date.year, date.month - 1, date.day]);
        if (!mdt.isValid()) return '';
        return mdt.format(this.DT_FORMAT);
    }
}
