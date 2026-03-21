import {Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle} from "@/components/ui/empty.tsx";
import {useNavigate} from "@tanstack/react-router";
import {HeartOffIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export function EmptyCookbook() {
    const navigate = useNavigate();

    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="default"><HeartOffIcon/></EmptyMedia>
                <EmptyTitle>No saved recipes yet!</EmptyTitle>
                <EmptyDescription>
                    This is your cookbook. Save recipes to collect them here.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button onClick={() => navigate({ to: "/" })}>Go to recipes</Button>
            </EmptyContent>
        </Empty>
    );
}
