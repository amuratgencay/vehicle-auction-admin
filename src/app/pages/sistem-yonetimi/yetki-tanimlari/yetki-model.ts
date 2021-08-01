import { YetkiDTO } from '@zyazilim/online-ihale-data';

export class YetkiExtendedDTO extends YetkiDTO {
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
            },
            {
                key: 'kod',
                name: 'Kod',
                type: 'string',
            },
        ];
    }
}
