/** @jsxImportSource preact */
import { h } from "preact";
import { useState } from "preact/hooks";

export default function FamilyMediaPlan() {
  // All form data lives here
  const [data, setData] = useState({
    familyName: "",
    vision: "",
    priorities: ["Homework", "Chores"],
    budgets: [], // {name, minutes}
    screenFreeZones: { bedrooms: false, dining: false, car: false, other: "" },
    screenFreeTimes: [],
    deviceCurfew: "21:00",
    chargingSpot: "Kitchen counter",
    oneScreen: true,
    offlineMenu: [],
    pledges: {
      respect: false,
      privacy: false,
      askAdult: false,
      signature: "",
    },
    ratings: { allowed: [], permission: [], never: [] },
    comms: { who: "Friends & Family", share: "Positive only" },
    techTalkDay: "Sunday",
    reviewDate: new Date(Date.now() + 15552e6) /* ~6 mo */
      .toISOString()
      .slice(0, 10),
    signatures: "",
  });
  const [step, setStep] = useState(0);

  const steps = [
    // 0. Family title
    {
      title: "Family Name / Plan Title",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Personalize your plan with a family name.</p>
          <label className="form-control w-full">
            <span className="label-text font-semibold">Family or Plan Name</span>
            <input
              className="input input-bordered"
              value={data.familyName}
              onChange={(e) => setData((d) => ({ ...d, familyName: e.target.value }))}
              placeholder="Smith Family"
            />
          </label>
        </>
      ),
    },
    // 1. Vision
    {
      title: "Family Vision & Core Values",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Anchor the plan to what matters most in your home (kindness, sleep, outdoor time, faith, etc.).</p>
          <label className="form-control">
            <span className="label-text font-semibold mb-2">
              Our Family Values
            </span>
            <textarea
              className="textarea textarea-bordered min-h-[8rem]"
              value={data.vision}
              onChange={(e) => setData((d) => ({ ...d, vision: e.target.value }))}
            />
          </label>
        </>
      ),
    },
    // 2. Priorities checklist
    {
      title: "Daily Priorities Checklist",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Make sure homework, chores, physical activity, and hobbies come before recreational screens.</p>
          <div className="space-y-4">
            {data.priorities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <button
                  className="btn btn-xs"
                  disabled={idx === 0}
                  onClick={() =>
                    setData((d) => {
                      const arr = [...d.priorities];
                      [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
                      return { ...d, priorities: arr };
                    })
                  }
                >
                  ↑
                </button>
                <button
                  className="btn btn-xs"
                  disabled={idx === data.priorities.length - 1}
                  onClick={() =>
                    setData((d) => {
                      const arr = [...d.priorities];
                      [arr[idx + 1], arr[idx]] = [arr[idx], arr[idx + 1]];
                      return { ...d, priorities: arr };
                    })
                  }
                >
                  ↓
                </button>
                <input
                  className="input input-bordered grow"
                  value={item}
                  onChange={(e) =>
                    setData((d) => {
                      const arr = [...d.priorities];
                      arr[idx] = e.target.value;
                      return { ...d, priorities: arr };
                    })
                  }
                />
              </div>
            ))}
            <button
              className="btn btn-sm btn-primary"
              onClick={() =>
                setData((d) => ({ ...d, priorities: [...d.priorities, ""] }))
              }
            >
              Add another item
            </button>
          </div>
        </>
      ),
    },
    // 3. Screen-time budget
    {
      title: "Individual Screen-Time Budget",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Set a daily cap (or flexible range) for each family member.</p>
          <div className="space-y-4">
            {data.budgets.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  className="input input-bordered w-1/3"
                  placeholder="Name"
                  value={m.name}
                  onChange={(e) =>
                    setData((d) => {
                      const arr = [...d.budgets];
                      arr[i].name = e.target.value;
                      return { ...d, budgets: arr };
                    })
                  }
                />
                <input
                  type="range"
                  min="0"
                  max="240"
                  step="15"
                  value={m.minutes}
                  onChange={(e) =>
                    setData((d) => {
                      const arr = [...d.budgets];
                      arr[i].minutes = +e.target.value;
                      return { ...d, budgets: arr };
                    })
                  }
                  className="range grow"
                />
                <span className="w-16 text-right">{m.minutes} min</span>
              </div>
            ))}
            <button
              className="btn btn-sm btn-primary"
              onClick={() =>
                setData((d) => ({
                  ...d,
                  budgets: [...d.budgets, { name: "", minutes: 60 }],
                }))
              }
            >
              Add member
            </button>
          </div>
        </>
      ),
    },
    // 4. Screen-Free Zones
    {
      title: "Screen-Free Zones",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Identify places where devices never go (bedrooms, dinner table, car rides, etc.).</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["bedrooms", "Bedrooms"],
              ["dining", "Dining table"],
              ["car", "Car rides"],
            ].map(([key, label]) => (
              <label key={key} className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={data.screenFreeZones[key]}
                  onChange={() =>
                    setData((d) => ({
                      ...d,
                      screenFreeZones: {
                        ...d.screenFreeZones,
                        [key]: !d.screenFreeZones[key],
                      },
                    }))
                  }
                />
                {label}
              </label>
            ))}
            <input
              className="input input-bordered col-span-2"
              placeholder="Other room…"
              value={data.screenFreeZones.other}
              onChange={(e) =>
                setData((d) => ({
                  ...d,
                  screenFreeZones: { ...d.screenFreeZones, other: e.target.value },
                }))
              }
            />
          </div>
        </>
      ),
    },
    // 5. Screen-Free Times
    {
      title: "Screen-Free Times",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Block out parts of the day when screens are off.</p>
          <div className="space-y-4">
            {data.screenFreeTimes.map((t, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  className="input input-bordered grow"
                  placeholder="e.g. 7–8 pm homework block"
                  value={t}
                  onChange={(e) =>
                    setData((d) => {
                      const arr = [...d.screenFreeTimes];
                      arr[i] = e.target.value;
                      return { ...d, screenFreeTimes: arr };
                    })
                  }
                />
                <button
                  className="btn btn-xs"
                  onClick={() =>
                    setData((d) => ({
                      ...d,
                      screenFreeTimes: d.screenFreeTimes.filter((_, j) => j !== i),
                    }))
                  }
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              className="btn btn-sm btn-primary"
              onClick={() =>
                setData((d) => ({ ...d, screenFreeTimes: [...d.screenFreeTimes, ""] }))
              }
            >
              Add a recurring screen-free time
            </button>
          </div>
        </>
      ),
    },
    // 6. Device Curfew
    {
      title: "Device Curfew & Charging Station",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Choose a nightly shutdown time and where devices sleep.</p>
          <div className="space-y-4">
            <label className="form-control">
              <span className="label-text font-semibold">Curfew time</span>
              <input
                type="time"
                className="input input-bordered"
                value={data.deviceCurfew}
                onChange={(e) => setData((d) => ({ ...d, deviceCurfew: e.target.value }))}
              />
            </label>
            <label className="form-control">
              <span className="label-text font-semibold">Charging spot</span>
              <input
                className="input input-bordered"
                value={data.chargingSpot}
                onChange={(e) => setData((d) => ({ ...d, chargingSpot: e.target.value }))}
              />
            </label>
          </div>
        </>
      ),
    },
    // 7. One Screen toggle
    {
      title: "“One Screen at a Time” Toggle",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Reduce background or second-screen use.</p>
          <label className="flex items-center gap-4 cursor-pointer">
            <span className="label-text font-semibold">Enable one-screen rule</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={data.oneScreen}
              onChange={() => setData((d) => ({ ...d, oneScreen: !d.oneScreen }))}
            />
          </label>
        </>
      ),
    },
    // 8. Offline menu
    {
      title: "Offline & Outdoor Menu",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Offer quick, appealing alternatives when limits kick in.</p>
          <div className="space-y-2">
            <input
              className="input input-bordered w-full"
              placeholder="Add activity then press Enter"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                  e.preventDefault();
                  const val = e.currentTarget.value.trim();
                  setData((d) => ({ ...d, offlineMenu: [...d.offlineMenu, val] }));
                  e.currentTarget.value = "";
                }
              }}
            />
            <div className="flex flex-wrap gap-2">
              {data.offlineMenu.map((tag) => (
                <span key={tag} className="badge badge-outline cursor-pointer" onClick={() =>
                  setData((d) => ({ ...d, offlineMenu: d.offlineMenu.filter((t) => t !== tag) }))}>{tag} ✕</span>
              ))}
            </div>
          </div>
        </>
      ),
    },
    // 9. Safety pledge
    {
      title: "Online-Safety & Digital-Citizenship Pledge",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Agree on blocking/reporting, privacy, respectful behavior, and asking an adult when unsure.</p>
          <div className="space-y-2">
            {[
              ["respect", "I will be kind and respectful"],
              ["privacy", "I will protect my privacy"],
              ["askAdult", "I'll ask an adult if unsure"],
            ].map(([k, label]) => (
              <label key={k} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={data.pledges[k]}
                  onChange={() => setData((d) => ({
                    ...d,
                    pledges: { ...d.pledges, [k]: !d.pledges[k] },
                  }))}
                />
                {label}
              </label>
            ))}
            <input
              className="input input-bordered w-full mt-2"
              placeholder="Type your name as signature"
              value={data.pledges.signature}
              onChange={(e) => setData((d) => ({ ...d, pledges: { ...d.pledges, signature: e.target.value } }))}
            />
          </div>
        </>
      ),
    },
    // 10. App ratings placeholder
    {
      title: "App / Content Ratings",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Sort apps, games, and shows into Always Allowed, Needs Permission, or Never Allowed.</p>
          <p className="italic">Drag-and-drop organizer coming soon…</p>
        </>
      ),
    },
    // 11. Communication expectations
    {
      title: "Communication Expectations",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Clarify who children may message, appropriate hours, and family group-chat etiquette.</p>
          <div className="space-y-4">
            <label className="form-control">
              <span className="label-text font-semibold">Who can you message?</span>
              <input
                className="input input-bordered"
                value={data.comms.who}
                onChange={(e) => setData((d) => ({ ...d, comms: { ...d.comms, who: e.target.value } }))}
              />
            </label>
            <label className="form-control">
              <span className="label-text font-semibold">What’s okay to share?</span>
              <input
                className="input input-bordered"
                value={data.comms.share}
                onChange={(e) => setData((d) => ({ ...d, comms: { ...d.comms, share: e.target.value } }))}
              />
            </label>
          </div>
        </>
      ),
    },
    // 13. Weekly tech talk
    {
      title: "Weekly Tech-Talk Reminder",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Schedule a brief family check-in about screens.</p>
          <div className="space-y-4">
            <label className="form-control">
              <span className="label-text font-semibold">Day of week</span>
              <select
                className="select select-bordered"
                value={data.techTalkDay}
                onChange={(e) => setData((d) => ({ ...d, techTalkDay: e.target.value }))}
              >
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </label>
          </div>
        </>
      ),
    },
    // 14. Review & Sign
    {
      title: "Review Date & Signatures",
      content: (
        <>
          <p className="text-sm italic mb-2">Purpose: Set a “next review” date and collect signatures to finalize the plan.</p>
          <div className="space-y-4">
            <label className="form-control">
              <span className="label-text font-semibold">Next review date</span>
              <input
                type="date"
                className="input input-bordered"
                value={data.reviewDate}
                onChange={(e) => setData((d) => ({ ...d, reviewDate: e.target.value }))}
              />
            </label>
            <textarea
              className="textarea textarea-bordered min-h-[6rem]"
              placeholder="Signatures (type names or let each person sign)"
              value={data.signatures}
              onChange={(e) => setData((d) => ({ ...d, signatures: e.target.value }))}
            />
          </div>
        </>
      ),
    },
    // 15. Summary/print (reuse existing)
    {
      title: "Review & Print",
      content: (
        <div className="space-y-6">
          <div className="prose max-w-none">
            <h3>{data.familyName || "Family"} Media Plan Summary</h3>

            <h4>Family Vision & Core Values</h4>
            <p>{data.vision || "—"}</p>

            <h4>Daily Priorities</h4>
            <p>{data.priorities.length ? data.priorities.join(", ") : "—"}</p>

            <h4>Individual Screen-Time Budget</h4>
            {data.budgets.length ? (
              <ul>
                {data.budgets.map((b) => (
                  <li key={b.name + b.minutes}>{b.name || "Unnamed"}: {b.minutes} min</li>
                ))}
              </ul>
            ) : (
              <p>—</p>
            )}

            <h4>Screen-Free Zones</h4>
            <p>
              {(() => {
                const zones = Object.entries(data.screenFreeZones)
                  .filter(([key, val]) => key !== "other" && val)
                  .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1));
                if (data.screenFreeZones.other) zones.push(data.screenFreeZones.other);
                return zones.length ? zones.join(", ") : "—";
              })()}
            </p>

            <h4>Screen-Free Times</h4>
            <p>{data.screenFreeTimes.length ? data.screenFreeTimes.join(", ") : "—"}</p>

            <h4>Device Curfew & Charging Station</h4>
            <p>{data.deviceCurfew} at {data.chargingSpot}</p>

            <h4>One-Screen Rule Enabled</h4>
            <p>{data.oneScreen ? "Yes" : "No"}</p>

            <h4>Offline & Outdoor Menu</h4>
            <p>{data.offlineMenu.length ? data.offlineMenu.join(", ") : "—"}</p>

            <h4>Safety & Citizenship Pledge</h4>
            <p>
              {Object.entries(data.pledges)
                .filter(([k, v]) => k !== "signature" && v)
                .map(([k]) => {
                  const labels = { respect: "Be kind", privacy: "Protect privacy", askAdult: "Ask an adult" };
                  return labels[k];
                })
                .join(", ") || "—"}
            </p>
            <p><strong>Signature:</strong> {data.pledges.signature || "—"}</p>

            <h4>Communication Expectations</h4>
            <p><strong>Who:</strong> {data.comms.who || "—"}</p>
            <p><strong>Share:</strong> {data.comms.share || "—"}</p>

            <h4>Weekly Tech-Talk</h4>
            <p>{data.techTalkDay}</p>

            <h4>Next Review</h4>
            <p>{data.reviewDate}</p>

            <h4>Plan Signatures</h4>
            <p>{data.signatures || "—"}</p>
          </div>

          <button className="btn btn-primary print:hidden" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </div>
      ),
    },
  ];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="space-y-6">
      {/* Step indicator */}
      <ul className="steps w-full">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className={`step ${i <= step ? "step-primary" : ""}`}
          >
            {i + 1}
          </li>
        ))}
      </ul>

      {/* Step title & content */}
      <h3 className="text-xl font-semibold text-primary text-center">
        {steps[step].title}
      </h3>
      {steps[step].content}

      {/* Nav buttons */}
      <div className="flex justify-between mt-8">
        {step > 0 ? (
          <button className="btn" onClick={back}>
            Back
          </button>
        ) : (
          <span />
        )}
        {step < steps.length - 1 && (
          <button className="btn btn-primary" onClick={next}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
