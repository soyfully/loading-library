/**
 * etribeLoader 의 show 함수에 사용될 showConfig 인터페이스.
 * @interface
 */
interface iShowConfig {
    /** loading indicator 가 삽입될 앨리먼트. default : body*/
    renderAt?: HTMLElement;
    /** dim 표시 여부. default: false.*/
    dim?: boolean;
    /** scroll 이벤트 방지 여부. default : false.*/
    preventScroll?: boolean;
    /** loading indicator 의 크기 조절. 0, 1.3..~ 의 number로 제어.*/
    scale?: number;
    /** loader color 지정*/
    color?: string;
    /** dim style cssText*/
    dimCssText?: string;
    /** loading text*/
    loadingText?: string;
}