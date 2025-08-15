import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function BlogCard({ title, description, slug, date }) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <CardContent className="space-y-2">
          <p className="text-gray-400 text-sm">{date}</p>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
