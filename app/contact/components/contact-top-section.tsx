"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils";

import Container from "@/components/container";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Must be at least 2 characters.",
    }),
    email: z.string().min(5, {
        message: "Please Enter Correct Email Address.",
    }),
    contact: z.string().min(10, {
        message: "Please Enter Correct Contact Number.",
    }),
    message: z.string().min(4, {
        message: "Must be at least 4 characters.",
    }),
})

const ContactTopSection = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            contact: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (
        <div className="pt-40 pb-20 px-5 lg:py-40">
            <Container>
                <div className="flex flex-col space-y-10 lg:space-y-16 items-center justify-center text-textColor sm:px-4">
                    <h1 className="section-title leading-tight">Get in Touch !</h1>
                    <div className="w-full flex justify-center">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 items-center w-full mx-4 sm:mx-10">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className=" bg-transparent border-t-0 border-l-0 border-r-0 rounded-none px-0 pb-4 text-sm lg:text-base" placeholder="Enter Your Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    className=" bg-transparent border-t-0 border-l-0 border-r-0 rounded-none px-0 pb-4 text-sm lg:text-base" placeholder="Enter Your Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="contact"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    className=" bg-transparent border-t-0 border-l-0 border-r-0 rounded-none px-0 pb-4 text-sm lg:text-base" placeholder="Contact Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea className="bg-transparent border-t-0 border-l-0 border-r-0 rounded-none px-0 pb-4 text-sm lg:text-base" placeholder="Type your message here." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactTopSection;