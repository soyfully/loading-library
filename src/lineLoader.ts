import {abstractLoader} from "./abstractLoader";

export class lineLoader extends abstractLoader {
    constructor(config: iShowConfig) {
        super(config);
    }

    setHTML(): void {
        $(this.indicatorWrapper).empty();
        $(this.indicatorWrapper).append(
            $(  
                '<ul class="loader-type-4 loaderText">' +
                '<li></li><li></li><li></li><li></li>' +
                '</ul>'
            )
        );
    }

    setScale(scale: number): void {
        let targetNode = $(this.indicatorWrapper).find('li').eq(0),
            scaleValue = targetNode.width() * scale;

        $(this.indicatorWrapper).find('li').css({ width: scaleValue + 'px' });
        $(this.indicatorWrapper).find('li').css({ height: scaleValue + 'px' });
    }

    setColor(color: string): void {
        $(this.indicatorWrapper).find('li').css({ 'background-color': color });
    }

    setloadingText(loadingText: string): void {
        let creatDiv = document.createElement('div');
        creatDiv.style.cssText = 'text-align:center;margin-top:20px;'
        creatDiv.innerHTML = loadingText;
        let el = document.querySelector(".loaderText");
        el.appendChild(creatDiv);
    }
}