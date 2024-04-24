import { useEffect } from "react";
import getData from "../../data/getData";
export function Dashboard() {
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="h1">Profile</div>
        </>
    )
}