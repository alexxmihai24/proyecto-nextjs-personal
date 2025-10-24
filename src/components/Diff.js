import Image from "next/image";

function Diff() {
    return (
        <figure className="diff aspect-190/140 w-1/2" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
                <img alt="daisy" src="/vlad2.jpg" />
            </div>
            <div className="diff-item-2" role="img">
                <img
                   alt="Mi foto de comparación"
                    src="/vlad.jpg" className="object-left-top"/>
            </div>
            <div className="diff-resizer"></div>
        </figure>
    );
}

export default Diff;