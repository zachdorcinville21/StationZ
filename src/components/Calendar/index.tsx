import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/theme";
import { CalendarContainer, CalEvents, SignInBtn } from "./styles";
import CalEvent from "./CalEvent";
import moment from "moment";


const Calendar = () => {
    const theme = useContext(ThemeContext);
    const [calEvents, setEvents] = useState<any[]>([]);
    const [signedIn, toggleSignIn] = useState<boolean>(false);

    const SCOPES: string = "https://www.googleapis.com/auth/calendar.readonly";

    const timeMin = moment().startOf('day').utc().format();
    const timeMax = moment().endOf('day').utc().format();

    useEffect(() => {
        gapi.load('client:auth2', async () => {
            await gapi.client.init({
                apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
                clientId: process.env.REACT_APP_GOOGLE_CLIENTID,
                scope: SCOPES,
            });
        });
    }, []);

    useEffect(() => {
        gapi.load('client:auth2', async () => {
            await gapi.client.init({
                apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
                clientId: process.env.REACT_APP_GOOGLE_CLIENTID,
                scope: SCOPES,
            });

            const auth2 = gapi.auth2.getAuthInstance();

            if (auth2.isSignedIn.get()) {
                const email = auth2.currentUser.get().getBasicProfile().getEmail();
                getCalEvents(email);
            }
        });
    }, [signedIn]);

    const getCalEvents = async (email: string) => {
        const events = await gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${email}/events?timeMin=${timeMin}&timeMax=${timeMax}&timeZone=GMT-04:00&singleEvents=true`,
        });
        if (events) {
            setEvents(events.result.items);
        }
    }

    const handleAuthClick = async () => {
        await gapi.auth2.getAuthInstance().signIn();
        toggleSignIn(true);
    }

    return (
        <CalendarContainer>
            <h1 style={theme.textStyle}>Today's events</h1>
            <SignInBtn id='sign-in' onClick={handleAuthClick}>Choose Google account</SignInBtn>
            <CalEvents>
                {calEvents.map((event: any, idx: number) => (
                    <CalEvent
                        title={event.summary}
                        start={event.start.dateTime}
                        end={event.end.dateTime}
                        link={event.hangoutLink}
                        key={idx}
                    />
                ))}
            </CalEvents>
        </CalendarContainer>
    );
}


export default Calendar;

