import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitCaseToWebhook } from "@/services/webhookService";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

// Validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  nationalId: z.string().min(5, { message: "National ID number is required." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  ageRange: z.string({ required_error: "Please select an age range." }),
  caseDescription: z.string().min(10, { message: "Case description must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

interface CaseFormProps {
  department: 'Emergency' | 'Police';
  webhookUrl?: string;
}

const CaseForm = ({ department, webhookUrl = "" }: CaseFormProps) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      nationalId: "",
      phoneNumber: "",
      address: "",
      ageRange: "",
      caseDescription: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Prepare data for submission - all fields are guaranteed to exist after zod validation
    const caseData = {
      department,
      ...data,
    };

    try {
      const result = await submitCaseToWebhook(webhookUrl, caseData);
      
      if (result.success) {
        toast.success(result.message);
        // Reset form and redirect after successful submission
        form.reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md">
      <CardHeader className={department === "Emergency" ? "bg-emergency-light" : "bg-police-light"}>
        <CardTitle className="text-2xl">{department} Case Report</CardTitle>
        <CardDescription>
          Please fill in all the required information to submit your {department.toLowerCase()} case.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="nationalId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>National ID Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 123456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. +254700000000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="ageRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age Range of Injured Person</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1 to 7">1 to 7</SelectItem>
                        <SelectItem value="7 to 18">7 to 18</SelectItem>
                        <SelectItem value="18 to 30">18 to 30</SelectItem>
                        <SelectItem value="30 to 45">30 to 45</SelectItem>
                        <SelectItem value="Older than 45">Older than 45</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter full address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="caseDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Case Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please provide details about the case" 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="px-0 pt-2 flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate("/")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className={department === "Emergency" 
                  ? "bg-emergency-DEFAULT hover:bg-emergency-hover" 
                  : "bg-police-DEFAULT hover:bg-police-hover"
                }
                disabled={isSubmitting}
              >
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit {department} Case
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CaseForm;
