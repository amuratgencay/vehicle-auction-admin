import { AracEkspertizRaporuDTO } from '@zyazilim/online-ihale-data';

export class AracEkspertizRaporuExtendedDTO extends AracEkspertizRaporuDTO {
    static columnDefs(): any[] {
        return [{
            key: 'aracAracAdi',
            name: 'Araç Adı',
        },
        {
            key: 'aracPlaka',
            name: 'Plaka',
        },
        {
            key: 'dosyaAd',
            name: 'Dosya',
            cellTemplate: 'dokumanIndirLink',
            editorOptions: {
                customParams: {
                    detailKey: 'dosyaId',
                },
            },
        }];
    }
}
