/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ITOCItem } from "./components/uv-ebook-toc/ITOCItem";
export namespace Components {
    interface UvEbookReader {
        "display": (href: string) => Promise<void>;
        "getBook": () => Promise<any>;
        "height": string;
        "load": (url: string) => Promise<void>;
        "minSpreadWidth": number;
        "mobileWidth": number;
        "resize": () => Promise<void>;
        "width": string;
    }
    interface UvEbookToc {
        "disabled": boolean;
        "selected": string | null;
        "toc": ITOCItem[];
    }
}
declare global {
    interface HTMLUvEbookReaderElement extends Components.UvEbookReader, HTMLStencilElement {
    }
    var HTMLUvEbookReaderElement: {
        prototype: HTMLUvEbookReaderElement;
        new (): HTMLUvEbookReaderElement;
    };
    interface HTMLUvEbookTocElement extends Components.UvEbookToc, HTMLStencilElement {
    }
    var HTMLUvEbookTocElement: {
        prototype: HTMLUvEbookTocElement;
        new (): HTMLUvEbookTocElement;
    };
    interface HTMLElementTagNameMap {
        "uv-ebook-reader": HTMLUvEbookReaderElement;
        "uv-ebook-toc": HTMLUvEbookTocElement;
    }
}
declare namespace LocalJSX {
    interface UvEbookReader {
        "height"?: string;
        "minSpreadWidth"?: number;
        "mobileWidth"?: number;
        "onBookReady"?: (event: CustomEvent<any>) => void;
        "onLoadedBookMetadata"?: (event: CustomEvent<any>) => void;
        "onLoadedNavigation"?: (event: CustomEvent<any>) => void;
        "onRelocated"?: (event: CustomEvent<any>) => void;
        "onRenditionAttached"?: (event: CustomEvent<any>) => void;
        "width"?: string;
    }
    interface UvEbookToc {
        "disabled"?: boolean;
        "onItemClicked"?: (event: CustomEvent<any>) => void;
        "selected"?: string | null;
        "toc"?: ITOCItem[];
    }
    interface IntrinsicElements {
        "uv-ebook-reader": UvEbookReader;
        "uv-ebook-toc": UvEbookToc;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uv-ebook-reader": LocalJSX.UvEbookReader & JSXBase.HTMLAttributes<HTMLUvEbookReaderElement>;
            "uv-ebook-toc": LocalJSX.UvEbookToc & JSXBase.HTMLAttributes<HTMLUvEbookTocElement>;
        }
    }
}
