import { EpostaSablonlariDTO } from '@zyazilim/online-ihale-data';

export class EpostaSablonlariExtendedDTO extends EpostaSablonlariDTO {
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
                key: 'baslik',
                name: 'Başlık',
                type: 'string',
                formItem: {
                    colSpan: 2,
                },
            },
            {
                key: 'eposta',
                name: 'İçerik',
                type: 'string',
                editorOptions: {},
                formItem: {
                    colSpan: 2,
                },
                editCellTemplate: 'htmlEditCellTemplate',

            },
        ];
    }
}
