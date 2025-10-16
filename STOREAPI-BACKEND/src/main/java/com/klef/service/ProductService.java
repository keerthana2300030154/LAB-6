package com.klef.service;

import com.klef.entity.Product;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    Product addProduct(Product product);
    Product updateProduct(Product product);
    void deleteProduct(int id);
    Optional<Product> getProductById(int id);
    List<Product> getAllProducts();
}
