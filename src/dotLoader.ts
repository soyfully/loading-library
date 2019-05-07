import {abstractLoader} from "./abstractLoader";

export class dotLoader extends abstractLoader {
    constructor(config: iShowConfig) {
        super(config);
    }

    setHTML(): void {
        $(this.indicatorWrapper).empty();
        $(this.indicatorWrapper).append(
            $(
                '<div class="loader-type-3 loaderText">' +
                '<div class="loader-type-3-wrap">' +
                '<span></span>' +
                '<span></span>' +
                '<span></span>' +
                '</div>' +
                '</div>'  
            )
        );
    }

    setScale(scale: number): void {
        let targetNode = $(this.indicatorWrapper).find('span').eq(0),
            scaleValue = targetNode.width() * scale;

        $(this.indicatorWrapper).find('span').css({ width: scaleValue + 'px' });
        $(this.indicatorWrapper).find('span').css({ height: scaleValue + 'px' });
    }

    setColor(color: string): void {
        $(this.indicatorWrapper).find('span').css({ 'background-color': color });
    }

    setloadingText(loadingText: string): void {
        let creatDiv = document.createElement('div');
        creatDiv.style.cssText = 'text-align:center;margin-top:10px;'
        creatDiv.innerHTML = loadingText;
        let el = document.querySelector(".loaderText");
        el.appendChild(creatDiv);
    }
}