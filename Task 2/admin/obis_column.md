| Field                         | Remarks                                                                                                                      |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `id`                           | Globally unique identifier assigned by OBIS.                                                                                 |
| `dataset_id`                   | Internal dataset identifier assigned by OBIS.                                                                                |
| `decimalLongitude`             | Parsed and validated by OBIS.                                                                                                |
| `decimalLatitude`              | Parsed and validated by OBIS.                                                                                                |
| `date_start`                   | Unix timestamp based on eventDate (start).                                                                                   |
| `date_mid`                     | Unix timestamp based on eventDate (middle).                                                                                  |
| `date_end`                     | Unix timestamp based on eventDate (end).                                                                                     |
| `date_year`                    | Year based on eventDate.                                                                                                     |
| `scientificName`               | Valid scientific name based on the `scientificNameID` or derived by matching the provided `scientificName` with WoRMS.       |
| `originalScientificName`       | The `scientificName` as provided.                                                                                            |
| `minimumDepthInMeters`         | Parsed and validated by OBIS.                                                                                                |
| `maximumDepthInMeters`         | Parsed and validated by OBIS.                                                                                                |
| `coordinateUncertaintyInMeters`| Parsed and validated by OBIS.                                                                                                |
| `flags`                        | Quality flags added by OBIS. The quality flags are documented [here](https://obis.org/manual/qualitycontrol/).               |
| `dropped`                      | Record dropped by OBIS quality control?                                                                                      |
| `absence`                      | Absence record?                                                                                                              |
| `shoredistance`                | Distance from shore in meters added by OBIS quality control, based on OpenStreetMap. Negative value indicates inland distance.|
| `bathymetry`                   | Bathymetry added by OBIS. Based on EMODnet Bathymetry and GEBCO, see [here](https://github.com/iobis/xylookup).              |
| `sst`                          | Sea surface temperature added by OBIS. Based on Bio-Oracle, see [here](https://github.com/iobis/xylookup).                   |
| `sss`                          | Sea surface salinity added by OBIS. Based on Bio-Oracle, see [here](https://github.com/iobis/xylookup).                      |
| `marine`                       | Marine environment flag based on WoRMS.                                                                                      |
| `brackish`                     | Brackish environment flag based on WoRMS.                                                                                    |
| `freshwater`                   | Freshwater environment flag based on WoRMS.                                                                                  |
| `terrestrial`                  | Terrestrial environment flag based on WoRMS.                                                                                 |
| `taxonRank`                    | Based on WoRMS.                                                                                                              |
| `AphiaID`                      | AphiaID for the valid name based on the `scientificNameID` or derived by matching the provided `scientificName` with WoRMS.  |
| `redlist_category`             | IUCN Red List category.                                                                                                      |
| `superdomain`                  | Based on WoRMS.                                                                                                              |
| `domain`                       | Based on WoRMS.                                                                                                              |
| `kingdom`                      | Based on WoRMS.                                                                                                              |
| `subkingdom`                   | Based on WoRMS.                                                                                                              |
| `infrakingdom`                 | Based on WoRMS.                                                                                                              |
| `phylum`                       | Based on WoRMS.                                                                                                              |
| `phylum (division)`            | Based on WoRMS.                                                                                                              |
| `subphylum (subdivision)`      | Based on WoRMS.                                                                                                              |
| `subphylum`                    | Based on WoRMS.                                                                                                              |
| `infraphylum`                  | Based on WoRMS.                                                                                                              |
| `parvphylum`                   | Based on WoRMS.                                                                                                              |
| `gigaclass`                    | Based on WoRMS.                                                                                                              |
| `megaclass`                    | Based on WoRMS.                                                                                                              |
| `superclass`                   | Based on WoRMS.                                                                                                              |
| `class`                        | Based on WoRMS.                                                                                                              |
| `subclass`                     | Based on WoRMS.                                                                                                              |
| `infraclass`                   | Based on WoRMS.                                                                                                              |
| `subterclass`                  | Based on WoRMS.                                                                                                              |
| `superorder`                   | Based on WoRMS.                                                                                                              |
| `order`                        | Based on WoRMS.                                                                                                              |
| `suborder`                     | Based on WoRMS.                                                                                                              |
| `infraorder`                   | Based on WoRMS.                                                                                                              |
| `parvorder`                    | Based on WoRMS.                                                                                                              |
| `superfamily`                  | Based on WoRMS.                                                                                                              |
| `family`                       | Based on WoRMS.                                                                                                              |
| `subfamily`                    | Based on WoRMS.                                                                                                              |
| `supertribe`                   | Based on WoRMS.                                                                                                              |
| `tribe`                        | Based on WoRMS.                                                                                                              |
| `subtribe`                     | Based on WoRMS.                                                                                                              |
| `genus`                        | Based on WoRMS.                                                                                                              |
| `subgenus`                     | Based on WoRMS.                                                                                                              |
| `section`                      | Based on WoRMS.                                                                                                              |
| `subsection`                   | Based on WoRMS.                                                                                                              |
| `series`                       | Based on WoRMS.                                                                                                              |
| `species`                      | Based on WoRMS.                                                                                                              |
| `subspecies`                   | Based on WoRMS.                                                                                                              |
| `natio`                        | Based on WoRMS.                                                                                                              |
| `variety`                      | Based on WoRMS.                                                                                                              |
| `subvariety`                   | Based on WoRMS.                                                                                                              |
| `forma`                        | Based on WoRMS.                                                                                                              |
| `subforma`                     | Based on WoRMS.                                                                                                              |