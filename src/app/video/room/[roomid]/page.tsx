"use client";
import useTestUser from "@/hooks/useTestUser";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { v4 as uuid } from "uuid";

const Room = ({ params }: { params: { roomid: string } }) => {
    const { fullName } = useTestUser();
    const roomID = params.roomid;

    const myMeeting: any = async (element: any) => {
        // generate Kit Token
        const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_CLOUD_APP_ID!);
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_CLOUD_SERVER_SECRET!;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            uuid(),
            fullName || "user" + Date.now(),
            720
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Shareable link",
                    url:
                        window.location.protocol +
                        "//" +
                        window.location.host +
                        window.location.pathname +
                        "?roomID=" +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            maxUsers: 10,
        });
    };

    return <div className="w-full min-h-screen" ref={myMeeting}></div>;
};

export default Room;