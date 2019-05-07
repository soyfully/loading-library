import { abstractLoader } from './abstractLoader';

export class circleLoader extends abstractLoader {

    constructor(config: iShowConfig) {
        super(config);
    }

    setHTML(): void {
        $(this.indicatorWrapper).empty();
        $(this.indicatorWrapper).append(
            $(
                '<div class="loader-type-1-wrap">' +
                    '<div class="loader-type-1 loaderText">' +
                        '<svg class="circular" viewBox="25 25 50 50">' +
                            '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>' +
                        '</svg>' +
                    '</div>' +
                '</div>'
            )
        );
    }

    setScale(scale: number): void {
        let firstNode = $(this.indicatorWrapper).find('.loader-type-1'),
            scaleValue = firstNode.width() * scale;

        firstNode.css({ width: scaleValue + 'px' });
        firstNode.css({ height: scaleValue + 'px' });
    }

    setColor(color: string): void {
        let firstNode = $(this.indicatorWrapper).children().eq(0);
        firstNode.find('.path').css({ stroke: color });
    }

    setloadingText(loadingText: string): void {
        let creatDiv = document.createElement('div');
        // creatDiv.style.cssText = 'text-align:center;margin-top:20px'
        creatDiv.innerHTML = loadingText;
        let el = document.querySelector(".loader-type-1-wrap");
        el.appendChild(creatDiv);
    }
}