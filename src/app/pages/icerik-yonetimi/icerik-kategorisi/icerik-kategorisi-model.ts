import { IcerikKategorisiDTO, IcerikKategorisiService } from '@zyazilim/online-ihale-data';

export class IcerikKategorisiExtendedDTO extends IcerikKategorisiDTO {

    public get uzunAd(): string {
        return this.ustKategoriId ? `${this.ustKategoriGorunurMetin} -- > ${this.gorunurMetin}` : `${this.gorunurMetin}`
    }
    static columnDefs(icerikKategorisi: IcerikKategorisiService): any[] {
        return [{
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
            editorOptions: {},
            validators: [{
                type: 'required',
                message: 'Kod zorunludur',
            }],
            visible: true,
        },
        {
            key: 'gorunurMetin',
            name: 'Görünür Metin',
            type: 'string',
            validators: [{
                type: 'required',
                message: 'Kod zorunludur',
            }],
            visible: true,
        },
        {
            key: 'menudeGoster',
            name: 'Menüde Göster',
            type: 'boolean',
            visible: true,
        },
        {
            key: 'menuSirasi',
            name: 'Menü Sırası',
            type: 'number',
            visible: true,
        },
        {
            key: 'ustKategoriId',
            name: 'Üst Kategori',
            type: 'select',
            editorOptions: {
                valueExpr: 'id',
                displayExpr: 'uzunAd',
                itemsAsync: icerikKategorisi.getAll(),
            },
            visible: true,
        }];
    }
}
