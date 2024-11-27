import React, { useState } from 'react';
import MainLayout from '../components/Main Layout/MainLayout';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { 
    IoConstructSharp, IoExtensionPuzzleOutline, IoBookOutline,
    PiTreeStructure, BsChatRightDots, FaRegLightbulb, FaListCheck,
    RiFlowChart, LiaProjectDiagramSolid, MdCompareArrows, MdContentCopy,
    FaCode
} from '../assets/ReactIcons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PatternsCatalogue from '../components/PatternsCatalogue';

const InfoBlock = ({ icon: Icon, title, content }) => (
    <div>
        <div className='flex items-center gap-2'>
            <Icon className='w-auto h-5 text-primaryText' />
            <h1 className='mb-1 text-xl font-semibold'>{title}</h1>
        </div>
        <p className='text-base max-w-[80ch] break-words'>{content}</p>
    </div>
);

const CodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <div className='p-4 bg-gray-900 rounded-lg shadow-lg'>
            <div className='flex items-center justify-between'>
                <h2 className='mb-2 text-lg font-semibold text-white'>Sample Code</h2>
                <button 
                    onClick={handleCopy}
                    className='flex items-center gap-1 px-3 py-1 text-white rounded-lg bg-primaryText hover:bg-primaryDark'>
                    <MdContentCopy className='w-5 h-5' />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
            </div>
            <SyntaxHighlighter language="csharp" style={dracula} className="rounded-md">
                {code || '// No sample code provided.'}
            </SyntaxHighlighter>
        </div>
    );
};

const Pattern = () => {
    const { id } = useParams();
    const { data: pattern, isLoading, error } = useFetch(`/DesignPattern/${id}`);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return pattern && (
        <div className='flex flex-col gap-10 text-primaryText'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-5'>
                    <IoConstructSharp className='w-auto h-12 text-primaryText' />
                    <div>
                        <h1 className='text-2xl font-semibold'>{pattern.name}</h1>
                        <p className='mt-1 text-lg'>Also Known As {pattern.alsoKnownAs}</p>
                    </div>
                </div>
                <div className='self-stretch border-r border-opacity-50 border-primaryText' />
                <div className='flex items-center gap-3'>
                    <PiTreeStructure className='w-auto h-8 text-primaryText' />
                    <h1 className='text-xl'>{pattern.classification.name}</h1>
                </div>
            </div>
            
            <div className='grid grid-cols-2 gap-10'>
                {[
                    { icon: BsChatRightDots, title: "Intent", content: pattern.intent },
                    { icon: IoExtensionPuzzleOutline, title: "Motivation", content: pattern.motivation },
                    { icon: FaRegLightbulb, title: "Applicability", content: pattern.applicability },
                    { icon: RiFlowChart, title: "Structure", content: pattern.structure },
                    { icon: LiaProjectDiagramSolid, title: "Participants", content: pattern.participants },
                    { icon: MdCompareArrows, title: "Collaborations", content: pattern.collaborations },
                    { icon: FaListCheck, title: "Consequences", content: pattern.consequences },
                    { icon: FaCode, title: "Implementation", content: pattern.implementation },
                    { icon: IoBookOutline, title: "Known Uses", content: pattern.knownUses },
                ].map((item, index) => (
                    <InfoBlock key={index} {...item} />
                ))}
            </div>

            <CodeBlock code={pattern.sampleCode} />
        </div>
    );
};

const DesignPatternPage = () => (
    <MainLayout>
        <div>
            <div className='px-20 py-10'>
                <Pattern />
            </div>
            <PatternsCatalogue />
        </div>
    </MainLayout>
);

export default DesignPatternPage;