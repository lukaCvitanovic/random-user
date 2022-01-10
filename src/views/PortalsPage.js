import { Portal, PortalTarget, PortalProvider } from "@/components/portal/Portals";
import { useState } from 'react';

const PortalsPage = () => {
    const [flag, setFlag] = useState(false);

    const toggle = () => setFlag(!flag);

    return (
        <PortalProvider>
            <div className="flex flex-col">
                <span>Portal example</span>
                <div className="bg-red-300 p-4">
                    <span>Portal Target</span>
                    <PortalTarget portalName="test" />
                </div>
                <div>
                    {flag &&
                        <Portal portalName="test">
                            <div className="bg-blue-200">
                                Ported
                            </div>
                        </Portal>
                    }
                </div>
                <button onClick={toggle}>toggle</button>
            </div>
        </PortalProvider>
    );
};

export default PortalsPage;