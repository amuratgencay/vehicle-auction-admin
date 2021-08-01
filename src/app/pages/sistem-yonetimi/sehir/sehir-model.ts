import { SehirDTO } from '@zyazilim/online-ihale-data';

export class SehirExtendedDTO extends SehirDTO {

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
        ];
    }
}
