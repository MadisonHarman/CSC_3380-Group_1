# TripIt: A Minimal Itinerary Planner  
**Group 1 – CSC 3380**

<img width="612" height="612" alt="image" src="https://github.com/user-attachments/assets/f21f3520-f794-44f5-b0c0-be3a1720c6f9" />

---

## Why This Exists  
Planning a trip often means going between flight apps, emails for housing, calendars, and weather sites. That's confusing, inefficient, and, in turn, time-consuming.  
**TripIt** centralizes these essentials into one place, so travelers spend less time planning and more time enjoying their anticipated trip.

---

## Recent Updates & Changes

### New Features Added:
1. **Notification System** 🔔
   - Real-time event reminders with customizable timing (5 min, 15 min, 30 min, 1 hour, 2 hours, or 1 day before)
   - Automatic notifications for upcoming events (today, tomorrow, 2-3 days out)
   - Browser push notifications for time-sensitive reminders
   - Visual notification panel with unread badge indicator
   - Notifications persist across sessions and auto-clean after 3 days

2. **Enhanced Calendar View** 📅
   - Replaced FullCalendar.js dependency with custom-built monthly calendar grid
   - Improved performance and reduced external dependencies
   - Better integration with agenda items showing Travel/Lodging tags
   - Navigation controls (Previous Month, Today, Next Month)
   - Visual indicators for current day and events
   - Shows first 3 events per day with "+X more" indicator

3. **Reminder System** ⏰
   - Individual reminder settings for each calendar event
   - Multiple reminder options from 5 minutes to 1 day before
   - Visual reminder badges on calendar events
   - Automatic reminder notifications at scheduled times

4. **Improved Weather Integration** 🌦️
   - Enhanced error handling and loading states
   - Better date range filtering for trip dates
   - Improved visual feedback during searches
   - Enter key support for quick searches
   - More informative error messages

### Technical Improvements:
- **Storage System**: Updated to v3 with notification support
- **Code Comments**: Comprehensive inline documentation added throughout all files
- **UI Enhancements**: Improved notification bell icon with badge system
- **Responsive Design**: Calendar grid adapts to different screen sizes
- **Performance**: Removed heavy FullCalendar library, reducing page load time

---

## Pages & Navigation  
1. **Home**: Create or select trips (stored locally). 
2. **Calendar**: Add daily agenda items like flights, meals, check-ins, etc. with customizable reminders.
3. **Calendar View**: View your trip timeline in a custom monthly calendar with automatic event display.
4. **Weather**: Search cities to see the weather in °F with trip date filtering.
5. **Packing List**: Add, remove, check, or auto-generate packing items. 

---

## Usage Tips  
1. Create a trip on the 'Home' page.  
2. Select that trip and then visit 'Calendar', 'Weather', or 'Packing List'.  
3. **Calendar:** Pick a date, add activities, set times, and configure reminders for important events.
4. **Notifications:** Click the bell icon (🔔) to view all your event reminders and notifications.
5. **Calendar View:** Navigate through months to see all your scheduled activities visually.
6. **Weather:** Type a city name, click 'Search', and 7-day forecast is shown. Use "Use Trip Dates" to filter to your trip range.
7. **Packing List:** Edit a list freely or generate suggestions based on trip duration and weather.
8. You can close or return to the website any time; all data (including notifications) is stored locally.

> If features seem disabled, ensure you've created and selected a trip first.  
> Enable browser notifications for the best reminder experience!

---

## Setup & Installation Instructions  

### Required Software  
- Any modern web browser (Chrome, Edge, Firefox, Safari) with internet and a Windows, Mac, or Linux OS.
- This runs entirely client-side, so no compiler, emulator, or runtime is required.
- **Note**: For best experience with notifications, allow browser notification permissions when prompted.

---

### Quick Start  

#### Option 1 
1. Download or clone the repository and run locally.
   
   ```bash
   git clone https://github.com/madisonharman/CSC_3380-Group_1.git
   cd CSC_3380-Group_1
   ```

#### Option 2
2. Open either index.html or the GitHub Pages link (https://madisonharman.github.io/CSC_3380-Group_1/) in your browser. You can also "Open with Live Server" in VS Code.

--- 

## Libraries & APIs Used:
1. ~~FullCalendar.js~~ → **Replaced with custom calendar implementation**
2. Open-Meteo API (Weather forecasts)
3. Open-Meteo Geocoding API (City location lookup)
4. Google Fonts / CSS (Typography)
5. Vanilla JavaScript (No frameworks required)
6. localStorage (Client-side data persistence)
7. **Web Notifications API** (New: Browser notifications)

---

## File Structure
```
TripIt/
├── index.html              # Home page with trip management
├── calendar.html           # Daily agenda with reminders
├── calendar_view.html      # Monthly calendar visualization
├── weather.html            # Weather forecast lookup
├── packing.html            # Packing list manager
├── css/
│   └── styles.css          # All styling including notification UI
└── js/
    ├── storage.js          # localStorage management (v3)
    ├── common.js           # Shared utilities and trip display
    ├── calendar.js         # Agenda management with reminders
    ├── calendar_view.js    # Custom monthly calendar rendering
    ├── weather.js          # Weather API integration
    ├── packing.js          # Packing list logic
    └── notifications.js    # NEW: Notification system
```

---

## Key Differences from Previous Version (final_code → tripit)

### Removed Dependencies:
- **FullCalendar.js library**: Replaced with lightweight custom calendar
- Reduced external CDN dependencies
- Smaller overall bundle size

### Added Files:
- `notifications.js`: Complete notification system (300+ lines)
- Enhanced CSS for notification UI components

### Modified Files:
- `storage.js`: Updated to v3 with notification storage support
- `calendar.html`: Added reminder dropdown selection
- `calendar.js`: Integrated reminder functionality
- `calendar_view.html`: New navigation controls
- `calendar_view.js`: Complete rewrite with custom calendar grid
- `weather.js`: Enhanced error handling and user feedback
- All HTML files: Added notification bell and panel to navigation

---

## Acknowledgements & Learning Resources
1. **W3Schools:** HTML/CSS/JS layout tutorials.
2. **GeeksforGeeks:** JavaScript app patterns & weather API examples.
3. **Open-Meteo:** Free, no-key weather API.
4. **MDN Web Docs:** Web Notifications API documentation.
5. **CSS-Tricks:** CSS Grid and responsive design patterns.

---

## Future Enhancements (Potential)
- Export trips to calendar formats (iCal, Google Calendar)
- Multi-trip comparison view
- Collaborative trip planning
- Mobile app version
- Integration with flight/hotel booking APIs
- Photo/document attachment to trips

---

## License
MIT License - Feel free to use and modify for your own projects!

---

## Contributors
Group 1 – CSC 3380  
*Building better trip planning, one feature at a time.*
