import { BultenListeDTO } from '@zyazilim/online-ihale-data';

export class BultenListeExtendedDTO extends BultenListeDTO {
    public static columnDefs() {
        return [
            {
                key: 'id',
                name: 'Id',
                type: 'string',
                editorOptions: { readOnly: true },
                visible: false,
            },
            {
                key: 'eposta',
                name: 'Tam Ad',
                type: 'string'
            },
            {
                key: 'kayitZamani',
                name: 'Kayıt Tarihi',
                type: 'date',
                format:'dd.MM.yyyy hh:mm'
            },
            {
                key: 'ayrilisZamani',
                name: 'Ayrılış Tarihi',
                type: 'date',
                format:'dd.MM.yyyy hh:mm'
            },
            {
                key: 'aktifMi',
                name: 'Aktif Mi',
                type: 'boolean'
            },
        ]
    }
}