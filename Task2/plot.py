from pymongo import MongoClient
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# MongoDB Connection
def connect_mongo(collec):
    client = MongoClient("mongodb+srv://obis:obis-project@obis-results.cer3o.mongodb.net/?retryWrites=true&w=majority&appName=OBIS-results")
    db = client['biodiversity_db']
    collection = db[collec]
    return collection

# Fetch Data from MongoDB
def fetch_data(collection):
    collection = connect_mongo(collection)
    data = list(collection.find())
    return pd.DataFrame(data)

# Plot Species Migration
def plot_species_migration(species_name, migration_data):

    species_data = migration_data[migration_data['scientificName'] == species_name]

    if species_data.empty:
        print(f"No migration data found for species: {species_name}")
        return

    plt.figure(figsize=(10, 6))
    plt.plot(species_data['date_year'], species_data['avg_latitude'], marker='o')
    plt.title(f'Migratory Movement of {species_name} Over Time')
    plt.xlabel('Year')
    plt.ylabel('Average Latitude')
    plt.grid(True)
    plt.show()

# Plot Species Richness Heatmap
def plot_species_richness():
    # Fetch biodiversity hotspots data from MongoDB
    collection_name = 'biodiversity_hotspots'
    hotspots_data = fetch_data(collection_name)

    # Check if data is available
    if hotspots_data.empty:
        print("No biodiversity hotspot data found.")
        return

    # Create a heatmap of species richness
    plt.figure(figsize=(12, 8))
    heatmap_data = hotspots_data.pivot_table(values='species_richness', 
                                             index='lat_grid', 
                                             columns='lon_grid', 
                                             fill_value=0)  # Fill NaN with 0 for heatmap
    sns.heatmap(heatmap_data, cmap='YlGnBu', cbar_kws={'label': 'Number of Species'})
    plt.title('Biodiversity Hotspots Heat Map')
    plt.xlabel('Longitude (Grid)')
    plt.ylabel('Latitude (Grid)')
    plt.show()

def main():
    # Migration
    collection = 'migration'
        # Fetch migration data from MongoDB
    migration_data = fetch_data(collection)

    # List all species available in the dataset
    #unique_species = migration_data['scientificName'].unique()
    #print("Available Species in the Database:")
    #for species in unique_species:
    #    print(species)

    #species_name = input("Enter the scientific name of the species to visualize: ")
    species_name = "Dipolydora coeca"
        # Plot the migration trend of the selected species
    plot_species_migration(species_name, migration_data)

    # Species Richness
    plot_species_richness()

if __name__ == "__main__":
    main()
