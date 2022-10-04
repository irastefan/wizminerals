export const enum TypeBySkinTone {
    Neutral = 'neutral', 
    Warm = 'warm',
    Cool = 'cool',
    Olive = 'olive',
    Pink = 'pink'
}

//type SkinTone = 'neutral' | 'warm' | 'cool' | 'olive' | 'pink';

interface IColorBase {
    type: TypeBySkinTone,
    size: number,
    calcBase: object,
}

interface IBase {
    yellow: number,
    red: number,
    blue: number,
    black: number
}

export class ColorBase implements IColorBase {
    type;
    size;

    constructor (type: TypeBySkinTone, size: number) {
        this.type = type;
        this.size = size;
    }

    getType () {
        return this.type;
    }

    calcBase () {
        let base: IBase = {
            yellow: 0,
            blue: 0,
            red: 0,
            black: 0
        };
        switch (this.type) {
            case TypeBySkinTone.Neutral:
                base = {
                    yellow: 75,
                    red: 15,
                    blue: 8,
                    black: 2
                };
                break;
                
            case TypeBySkinTone.Warm:
                base = {
                    yellow: 89,
                    red: 11,
                    blue: 0,
                    black: 0
                };
                break;

            case TypeBySkinTone.Olive:
                base = {
                    yellow: 55,
                    red: 10,
                    blue: 35,
                    black: 0
                };
                break;

            case TypeBySkinTone.Pink:
                base = {
                    yellow: 38,
                    red: 35,
                    blue: 27,
                    black: 0
                };
                break;
        }
        return {
            yellow: this.size * base.yellow / 100,
            red: this.size * base.red / 100,
            blue: this.size * base.blue / 100,
            black: this.size * base.black / 100,
        };
    }
}