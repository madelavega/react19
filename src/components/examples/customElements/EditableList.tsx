import {preinit} from "react-dom";
import {useState} from "react";
//ejemplo antiguo de como usar custom elements: https://github.com/madelavega/delavega-app/blob/develop/src/DateSelector/index.jsx

declare module "react/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements {
            "editable-list": unknown;
        }
    }
}

const EditableList = () => {
    preinit('thirdParty/customElements/editable-list.js', {as: 'script' })
    const [title] = useState('TODO List');
    return (
        <>
            <div>Ejemplo de custom element</div>
            <editable-list
                title={title}
                list-item-0="First item on the list"
                list-item-1="Second item on the list"
                list-item-2="Third item on the list"
                list-item-3="Fourth item on the list"
                list-item-4="Fifth item on the list"
                add-item-text="Add new list item:"
            >
            </editable-list>
        </>
    )
}

export default EditableList;