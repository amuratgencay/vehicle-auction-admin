import { LokasyonDTO } from '@zyazilim/online-ihale-data';

export class LokasyonExtendedDTO extends LokasyonDTO {
    static columnDefs(): any[] {
        return [{
            key: 'id',
            name: 'Id',
            type: 'string',
            editorOptions: { readOnly: true },
            visible: false,
        },
        {
            key: 'ad',
            name: 'Ad',
            type: 'string',
            validators: [{
                type: 'required',
                message: 'Ad zorunludur',
            }],
            visible: true,
        },
        {
            key: 'adres',
            name: 'Adres',
            type: 'string',
            validators: [{
                type: 'required',
                message: 'Adres zorunludur',
            }],
            visible: true,
        },
        {
            key: 'telefon',
            name: 'Telefon',
            type: 'string',
            validators: [{
                type: 'required',
                message: 'Telefon zorunludur',
            }],
            visible: true,
            editorOptions: { mask: '0 (000) 000 00 00' },
        },
        {
            key: 'telefon2',
            name: 'Telefon 2',
            type: 'string',
            visible: true,
            editorOptions: { mask: '0 (000) 000 00 00' },
        },
        {
            key: 'faks',
            name: 'Faks',
            type: 'string',
            visible: true,
            editorOptions: { mask: '0 (000) 000 00 00' },
        }];
    }
}
