import NavBar from "../components/navbar";
import DocumentationAPIReference from "../components/documentationAPIReference";
import DocumentationSampleContract from "../components/documentationSampleContract";

export default function Documentation() {
    return (
        <div>
            <NavBar />
            <h1>Documentation</h1>
            <DocumentationAPIReference />

            <DocumentationSampleContract />
        </div>
    )
}