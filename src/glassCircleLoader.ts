import { abstractLoader } from './abstractLoader';

export class glassCircleLoader extends abstractLoader {

    constructor(config: iShowConfig) {
        super(config);
    }

    setHTML(): void {
        $(this.indicatorWrapper).empty();
        $(this.indicatorWrapper).append(
            $(
                '<div class="loader-type-2-wrap">' +
                '<div class="loader-type-2 loaderText"></div>' +
                '</div>'
            )
        );
    }

    setScale(scale: number): void {
        let firstNode = $(this.indicatorWrapper).find('.loader-type-2'),
            scaleValue = firstNode.width() * scale;

        firstNode.css({ width: scaleValue + 'px' });
        firstNode.css({ height: scaleValue + 'px' });
    }

    setColor(color: string): void {
        let firstNode = $(this.indicatorWrapper).find('.loader-type-2');
        firstNode.css({ 'border-top-color': color });
    }

    setloadingText(loadingText: string): void {
        let creatDiv = document.createElement('div');
        creatDiv.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)'
        creatDiv.innerHTML = loadingText;
        this.indicatorWrapper.appendChild(creatDiv);
    }
}