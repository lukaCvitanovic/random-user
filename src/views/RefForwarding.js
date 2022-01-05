import { useRef, useEffect } from "react";
import RefReferencer from "@/components/ref-forwarding/RefReferencer";

const RefForwarding = () => {
    const ref = useRef(null);

    useEffect(() => console.log(ref));

    return (
        <div>
            <span>Forward ref</span>
            <RefReferencer ref={ref}>Click me</RefReferencer>
        </div>
    );
};

export default RefForwarding;