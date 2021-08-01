import { RolDTO } from '@zyazilim/online-ihale-data';

export class RolExtendedDTO extends RolDTO {
    public static columnDefs() {
        return [
            {
                key: 'id',
                name: 'Id',
                type: 'string',
                cellTemplate: 'rolDetailLink',
                editorOptions: {
                    readOnly: true,
                    customParams: {
                        detailKey: 'id',
                    },
                },
                visible: false,
            },
            {
                key: 'ad',
                name: 'Ad',
                type: 'string',
                editorOptions: {
                    customParams: {
                        detailKey: 'id',
                    },
                },
                cellTemplate: 'rolDetailLink',
            },
        ];
    }
}
