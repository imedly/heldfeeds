import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
export const Widget = () =>{
    return (
    <div className="fixed bottom-4 right-4 z-50">
    <Button className="rounded-full shadow-lg hover:scale-105">Feedback</Button>
    <div>
        <h3>Send us your feedback</h3>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <Input id="name" placeholder="Enter your name"/>
            </div>
            <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="Enter your email"/>
            </div>

            <div>
             <Label htmlFor="feedback">Feedback</Label>
             <Textarea
              id="feedback"
              placeholder="Tell us what you think"
              className="min-h-[100px]"
              />
              <Button type="submit">Soumettre</Button>
            </div>
        </form>
    </div>
    </div>
    );
}