import { AracParcaDTO } from '@zyazilim/online-ihale-data';

export class AracParcaExtendedDTO extends AracParcaDTO {

    static columnDefs(): any[] {
        return [
            {
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
            },
            {
                key: 'boyaliDeger',
                name: 'Boyalı Değer',
                type: 'number',
                validators: [{
                    type: 'required',
                    message: 'Boyalı Değer zorunludur',
                }],
            },
            {
                key: 'degisenDeger',
                name: 'Değişen Değer',
                type: 'number',
                validators: [{
                    type: 'required',
                    message: 'Değişen Değer zorunludur',
                }],
            },
            {
                key: 'ekspertizMi',
                name: 'Ekspertiz Raporuna Tabi Mi',
                type: 'boolean',
            },
        ]

    }
}