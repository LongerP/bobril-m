import * as b from "bobril";
import * as m from "./index";
import * as icons from "bobril-m-icons";
import "bobril-flex-ie10";

m.initRobotoFonts();

let spacer = { tag: "span", style: { display: "inline-block", width: 8, height: 8 } };
let examplePaper = b.styleDef({ width: 100, height: 100, margin: 16, padding: 34, textAlign: "center", display: "inline-block" });
let ch1 = false;
let s1 = false;
let s2 = true;
let s3 = false;
let ch3 = 0;
let rb1 = b.propi(0);
let slider1 = b.propi(0);
let slider2 = b.propi(10);
let str1 = b.propi("");
let str2 = b.propi("");
let str3 = b.propi("");
let str4 = b.propi("");
let str5 = b.propi("");

function createFlexLayout(children: b.IBobrilNode[]): b.IBobrilNode {
    return b.styledDiv(children.map((child) => {
        return b.styledDiv(child, { flex: 1 });
    }), { display: "flex" });
}

function createAvatar(content: string): b.IBobrilNode {
    return {
        tag: "svg", attrs: { width: 40, height: 40 },
        children: [
            { tag: "circle", attrs: { cx: "20", cy: "20", r: "18", stroke: m.primary2Color(), "stroke-width": "2", fill: m.transparent } },
            { tag: "text", attrs: { "text-anchor": "middle", dy: ".4em", x: "20", y: "19", fill: m.primary2Color(), "font-size": 24 }, children: content }
        ]
    };
}

b.init(() => {
    return [
        m.Paper({ zDepth: 0, style: { margin: 16, padding: 8 } }, [
            m.Toggle({ checked: ch1, action: () => { ch1 = !ch1; b.invalidate() } }),
            spacer,
            m.Toggle({ checked: ch1, disabled: true }),
            spacer,
            spacer,
            m.Button({ type: m.ButtonType.Raised, action: () => m.lightTheme() }, "Light Theme"),
            spacer,
            m.Button({ type: m.ButtonType.Raised, action: () => m.darkTheme() }, "Dark Theme"),
        ]),
        m.Paper({ zDepth: 0, style: { margin: 16, padding: 8 } }, [
            m.Badge({ badgeContent: "0" }, "Normal Badge"),
            m.Badge({ badgeContent: "1", primary: true }, "Primary"),
            m.Badge({ badgeContent: "99+", secondary: true }, "Secondary")
        ]),
        m.Paper({ zDepth: 0, style: { margin: 16, padding: 8 } }, [
            m.TextField({ value: str1, labelText: "First Name" }),
            m.TextField({ value: str2, labelText: "Last Name", errorText: str2() == "" ? "This field is required" : null }),
            m.TextField({ value: str5, labelText: "Password", inputType: "password" }),
            m.TextField({ value: str3, hintText: "Hint text and no label" }),
            m.TextField({ value: str3, labelText: "Disabled with label", disabled: true }),
            m.TextField({ value: str4, rows: 2, rowsMax: 4, hintText: "Multiline 2-4 rows, Hint text and no label" }),
            m.TextField({ value: str4, rows: 2, rowsMax: 4, labelText: "Multiline 2-4 rows, Disabled with label", disabled: true }),
        ]),
        m.Paper({ zDepth: 0, style: { margin: 16, padding: 8 } }, [
            m.Slider({ value: slider1 }),
            m.Slider({ value: slider1, disabled: true }),
            m.Slider({ value: slider2, min: 5, max: 15, step: 1 }),
            m.Slider({ value: slider2, min: 5, max: 15, step: 1, disabled: true }),
        ]),
        m.Paper({ zDepth: 0, style: { margin: 16, padding: 8 } }, [
            m.Paper({ zDepth: 1, style: examplePaper }, "1"),
            m.Paper({ zDepth: 2, style: examplePaper }, "2"),
            m.Paper({ zDepth: 3, style: examplePaper }, "3"),
            m.Paper({ zDepth: 4, style: examplePaper }, "4"),
            m.Paper({ zDepth: 5, style: examplePaper }, "5"),
        ]),
        m.Paper({ zDepth: 0, style: { margin: 16, padding: 8 } }, [
            m.Paper({ zDepth: 1, round: false, style: examplePaper }, "1"),
            m.Paper({ zDepth: 2, round: false, style: examplePaper }, "2"),
            m.Paper({ zDepth: 3, round: false, style: examplePaper }, "3"),
            m.Paper({ zDepth: 4, round: false, style: examplePaper }, "4"),
            m.Paper({ zDepth: 5, round: false, style: examplePaper }, "5"),
        ]),
        m.Paper({ zDepth: 0, style: { margin: 16, padding: 8 } }, [
            m.Paper({ zDepth: 1, circle: true, style: examplePaper }, "1"),
            m.Paper({ zDepth: 2, circle: true, style: examplePaper }, "2"),
            m.Paper({ zDepth: 3, circle: true, style: examplePaper }, "3"),
            m.Paper({ zDepth: 4, circle: true, style: examplePaper }, "4"),
            m.Paper({ zDepth: 5, circle: true, style: examplePaper }, "5"),
        ]),
        m.Paper({ style: { margin: 16, padding: 8 } }, [
            m.Button({}, "Default"), spacer,
            m.Button({ feature: m.Feature.Primary }, "Primary"), spacer,
            m.Button({ feature: m.Feature.Secondary }, "Secondary"), spacer,
            m.Button({ disabled: true }, "Disabled")
        ]),
        m.Paper({ style: { margin: 16, padding: 8 } }, [
            m.Button({ type: m.ButtonType.Raised }, "Default"), spacer,
            m.Button({ type: m.ButtonType.Raised, feature: m.Feature.Primary }, "Primary"), spacer,
            m.Button({ type: m.ButtonType.Raised, feature: m.Feature.Secondary }, "Secondary"), spacer,
            m.Button({ type: m.ButtonType.Raised, disabled: true }, "Disabled")
        ]),
        m.Paper({ style: { margin: 16, padding: 8 } }, [
            m.Button({ type: m.ButtonType.Floating, icon: icons.contentAdd }), spacer,
            m.Button({ type: m.ButtonType.Floating, feature: m.Feature.Secondary, icon: icons.toggleStar }), spacer,
            m.Button({ type: m.ButtonType.Floating, disabled: true, icon: icons.toggleStarHalf })
        ]),
        m.Paper({ style: { margin: 16, padding: 8 } }, [
            m.Checkbox({ checked: ch1, action: () => { ch1 = !ch1; b.invalidate(); } }, "Two state Checkbox"),
            m.Checkbox({ checked: ch1, disabled: true }, "Disabled two state"),
            m.Divider(),
            m.Checkbox({ checked: ch3 == 1, indeterminate: ch3 == 2, action: () => { ch3 = (ch3 + 1) % 3; b.invalidate(); } }, "Three state Checkbox"),
            m.Checkbox({ checked: ch3 == 1, indeterminate: ch3 == 2, disabled: true }, "Disabled three state")
        ]),
        m.Paper({ style: { margin: 16, padding: 8 } }, [
            m.RadioButtonGroup({ value: rb1, unselectedValue: -1 }, [
                m.RadioButton({ value: 0 }, "Option A"),
                m.RadioButton({ value: 1 }, "Option B"),
                m.RadioButton({ value: 2 }, "Option C"),
                m.RadioButton({ value: 3, disabled: true }, "Disabled Option")
            ])
        ]),
        createFlexLayout([
            m.Paper({ style: { margin: 16 } }, [
                m.List({}, [
                    m.Subheader({}, "Simple list"),
                    m.ListItem({ leftIcon: icons.contentInbox, primaryText: "Inbox" }),
                    m.ListItem({ leftIcon: icons.actionGrade, primaryText: "Starred" }),
                    m.ListItem({ leftIcon: icons.contentSend, primaryText: "Send mail" })
                ]),
                m.Divider(),
                m.List({}, [
                    m.Subheader({}, "Simple list"),
                    m.ListItem({ rightIcon: icons.actionInfo, primaryText: "All mail", secondaryText: "All mail", secondaryTextLines: m.SecondaryTextLines.Single }),
                    m.ListItem({ rightIcon: icons.actionInfo, primaryText: "Trash", secondaryText: "Trash", secondaryTextLines: m.SecondaryTextLines.Single }),
                    m.ListItem({ rightIcon: icons.actionInfo, primaryText: "Spam" })
                ])
            ]),
            m.Paper({ style: { margin: 16 } }, [
                m.List({}, [
                    m.Subheader({}, "Nested list"),
                    m.ListItem({
                        leftIcon: icons.contentInbox,
                        primaryText: "Inbox"},
                        [
                            m.Subheader({ inset: true }, "Nested list"),
                            m.ListItem({ leftIcon: icons.actionGrade, primaryText: "Starred", }),
                            m.ListItem({
                                leftIcon: icons.contentSend,
                                primaryText: "Send mail",
                                disabled: true },
                                [
                                    m.ListItem({ leftIcon: icons.contentSend, primaryText: "Google" }),
                                    m.Divider({ inset: true }),
                                    m.ListItem({ leftIcon: icons.contentSend, primaryText: "Outlook" })
                                ]
                            )
                        ]
                    )
                ])
            ]),
            m.Paper({ style: { margin: 16 } }, [
                m.List({}, [
                    m.Subheader({}, "Settings list"),
                    m.ListItem({
                        primaryText: "Notifications",
                        secondaryText: "Allow notifications",
                        secondaryTextLines: m.SecondaryTextLines.Single,
                        leftCheckbox: m.Checkbox({ checked: ch1, action: () => { ch1 = !ch1; b.invalidate(); } }),
                        action: () => { ch1 = !ch1; b.invalidate(); }
                    }),
                    m.Divider(),
                    m.ListItem({
                        primaryText: "Events and reminders",
                        secondaryText: "Events and reminders",
                        secondaryTextLines: m.SecondaryTextLines.Single,
                        rightToggle: m.Toggle({ checked: ch1, action: () => { ch1 = !ch1; b.invalidate(); } }),
                        action: () => { ch1 = !ch1; b.invalidate(); }
                    })
                ])
            ]),
            m.Paper({ style: { margin: 16 } }, [
                m.List({}, [
                    m.Subheader({}, "Messages list"),
                    m.ListItem({
                        primaryText: "Subject",
                        secondaryText: "Text of message - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas lorem.",
                        secondaryTextLines: m.SecondaryTextLines.Double,
                        leftAvatar: createAvatar("A")
                    }),
                    m.Divider({ inset: true }),
                    m.ListItem({
                        primaryText: "Subject",
                        secondaryText: "Text of message - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas lorem.",
                        secondaryTextLines: m.SecondaryTextLines.Double,
                        leftAvatar: createAvatar("B")
                    })
                ])
            ]),
            m.Paper({ style: { margin: 16 } }, [
                m.List({}, [
                    m.Subheader({}, "Selectable list"),
                    m.ListItem({
                        primaryText: "Selectable Item 1",
                        selected: s1,
                        action: () => { s1 = !s1; s2 = s3 = false; b.invalidate(); }
                    }),
                    m.ListItem({
                        primaryText: "Selectable Item 2",
                        selected: s2,
                        action: () => { s2 = !s2; s1 = s3 = false; b.invalidate(); }
                    }),
                    m.ListItem({
                        primaryText: "Selectable Item 3",
                        selected: s3,
                        action: () => { s3 = !s3; s1 = s2 = false; b.invalidate(); }
                    })
                ])
            ])
        ])
    ];
});
