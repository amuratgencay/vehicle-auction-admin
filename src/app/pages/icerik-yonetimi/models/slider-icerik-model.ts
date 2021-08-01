
import { Serializable } from '../../../@core/data/abstract/base-read-only.service';
import { environment } from '../../../../environments/environment';

export class SliderIcerik implements Serializable<SliderIcerik> {
    /**
     *
     */
    constructor(public id: string = '',
        public icerik: string = '',
    ) {
    }
    deserialize(input): SliderIcerik {
        Object.keys(input).forEach(key => {
            this[key] = input[key];
        });
        return this;
    }
}