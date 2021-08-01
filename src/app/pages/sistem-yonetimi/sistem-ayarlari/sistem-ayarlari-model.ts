import { SistemAyarlariDTO } from '@zyazilim/online-ihale-data';

export class SistemAyarlariExtendedDTO extends SistemAyarlariDTO {
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
                key: 'kod',
                name: 'Kod',
                type: 'string',
            },
            {
                key: 'aciklama',
                name: 'Açıklama',
                type: 'string',
            },
            {
                key: 'deger',
                name: 'Değer',
                type: 'string',
            },
        ];
    }
}
