## Instructions to run locally

```
# .env
SANITY_STUDIO_PROJECT_ID="your_project_id"
SANITY_STUDIO_DATASET="your_dataset_name"
SANITY_STUDIO_HOST="your_studio_host_reference"
```

```powershell
npm install
```

```powershell
sanity dataset import ./data_samples/sample_landings.ndjson production --replace
```

```powershell
npm run dev
```