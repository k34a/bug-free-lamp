import { type BlogArticle } from "@/content/fns";
import Link from "next/link";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

interface FurtherReadingProps {
    prevArticle: BlogArticle | null;
    nextArticle: BlogArticle | null;
}

const NextArticle = (props: FurtherReadingProps) => {
    if (!props.nextArticle) {
        return null;
    }
    return (
        <Link
            href={`/blog/${props.nextArticle.slug}`}
            className={`group no-underline p-4 bg-slate-50 border-2 rounded-lg text-right ${
                props.prevArticle === null ? "md:col-start-2" : ""
            }`}
        >
            <p className="text-sm font-bold flex items-center gap-1 justify-end text-slate-500">
                Up Next <LuArrowRight />
            </p>
            <div className="group-hover:underline">
                {props.nextArticle.title}
            </div>
        </Link>
    );
};

const PrevArticle = (props: FurtherReadingProps) => {
    if (!props.prevArticle) {
        return null;
    }
    return (
        <Link
            href={`/blog/${props.prevArticle.slug}`}
            className="group no-underline p-4 bg-slate-50 border-2 rounded-lg text-left"
        >
            <p className="text-sm font-bold flex items-center gap-1 justify-start text-slate-500">
                <LuArrowLeft /> Previous
            </p>
            <div className="group-hover:underline">
                {props.prevArticle.title}
            </div>
        </Link>
    );
};

const FurtherReading = (props: FurtherReadingProps) => {
    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            aria-hidden="true"
        >
            <PrevArticle {...props} />
            <NextArticle {...props} />
        </div>
    );
};

export default FurtherReading;
