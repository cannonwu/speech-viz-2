# Speech Visualizer (MVP)

A simple monorepo with a React + TypeScript frontend and Python FastAPI backend.

## Setup

### Backend

1. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   ```

2. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```
   
   The backend will be available at `http://localhost:8000`

### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   
   The frontend will be available at `http://localhost:5173`

## Usage

1. Start the backend server (from the `backend` directory)
2. Start the frontend server (from the `frontend` directory)
3. Open `http://localhost:5173` in your browser
4. Click the "Ping backend" button to test the connection

## Project Structure

```
/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── main.tsx         # React entry point
│   │   ├── App.tsx          # Main app component
│   │   ├── api.ts           # Backend API helper
│   │   ├── App.css          # Component styles
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── package.json         # Node dependencies
│   ├── vite.config.ts       # Vite configuration
│   └── tsconfig.json        # TypeScript configuration
└── README.md                # This file

```



